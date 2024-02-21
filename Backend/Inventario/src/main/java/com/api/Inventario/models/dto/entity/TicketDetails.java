package com.api.Inventario.models.dto.entity;

import com.api.Inventario.models.dto.entity.base.Base;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "ticket_details")
public class TicketDetails extends Base {

}