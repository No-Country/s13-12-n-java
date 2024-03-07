package com.api.Inventario.service.Ticket;
import com.api.Inventario.model.entity.Supermarket;
import com.api.Inventario.model.entity.Ticket;
import com.api.Inventario.model.entity.TicketDetails;
import com.api.Inventario.model.dto.request.TicketRequest;
import com.api.Inventario.model.dto.response.TicketResponse;
import com.api.Inventario.model.enums.TipoTicketEnum;
import com.api.Inventario.repository.SupermarketRepository;
import com.api.Inventario.repository.TicketDetailsRepository;
import com.api.Inventario.repository.TicketRepository;
import com.api.Inventario.repository.base.BaseRepository;
import com.api.Inventario.service.base.BaseServiceImpl;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class TicketServiceImpl extends BaseServiceImpl<TicketResponse, TicketRequest,Long,Ticket> implements ITicketService {
	private TicketDetailsRepository ticketDetailsRepository;
	private TicketRepository ticketRepository;
	private ModelMapper modelMapper;
	private final SupermarketRepository supermarketRepository;

	public TicketServiceImpl(BaseRepository<Ticket, Long> baseRepository,
							 TicketDetailsRepository ticketDetailsRepository,
							 TicketRepository ticketRepository,
							 ModelMapper modelMapper,
							 SupermarketRepository supermarketRepository) {
		super(baseRepository);
		this.ticketDetailsRepository = ticketDetailsRepository;
		this.ticketRepository = ticketRepository;
		this.modelMapper = modelMapper;
		this.supermarketRepository = supermarketRepository;
	}



	@Transactional
	public void createTicketAndDetail(TicketRequest ticketRequest) {
		List<TicketDetails> ticketDetailsList = ticketRequest.getTicketDetails();
		ticketRequest.setTicketDetails(null);
		Ticket ticket = modelMapper.map(ticketRequest, Ticket.class);
		ticketRepository.save(ticket);
		for (TicketDetails tic : ticketDetailsList) {
			Optional<Supermarket> supermarket = supermarketRepository.findById(tic.getIdProduct());
			double stockActual = supermarket.get().getStock();

			if ("FACTURA".equals(ticketRequest.getTipo())) {
			int resStock = (int) (stockActual - tic.getAmount());
				supermarket.get().setStock(resStock);

		} else   {
				int resStock = (int) (stockActual + tic.getAmount());
				supermarket.get().setStock(resStock);
			}

			supermarketRepository.save(supermarket.get());
			 tic.setSubTotal(supermarket.get().getPrice() * tic.getAmount());
			 tic.setTicket(ticket);
		}
		ticketDetailsRepository.saveAll(ticketDetailsList);
		ticket.setTicketDetails( ticketDetailsList);

	}

	public void restarStock() {

	}

}
