package com.api.Inventario.context;

import com.api.Inventario.model.entity.Category;
import com.api.Inventario.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Runner implements CommandLineRunner {

  @Autowired
 private  CategoryRepository categoryRepository;

	@Override
	public void run(String... args) throws Exception {

		Category categoriaLimpieza = new Category("Limpieza", "Productos de limpieza y cuidado del hogar",null);
		Category categoriaBebidasAlcoholicas = new Category("Bebidas Alcohólicas", "Variedad de bebidas alcohólicas",null);
		Category categoriaPanaderia = new Category("Panadería", "Productos frescos de panadería",null);
		Category categoriaFrutasVerduras = new Category("Frutas y Verduras", "Productos frescos de frutas y verduras",null);
		Category categoriaCongelados = new Category("Congelados", "Productos congelados y alimentos listos para cocinar",null);
		Category categoriaCuidadoPersonal = new Category("Cuidado Personal", "Productos de cuidado personal y belleza",null);
		Category categoriaElectrodomesticos = new Category("Electrodomésticos", "Electrodomésticos para el hogar",null);
		Category categoriaMascotas = new Category("Mascotas", "Productos para mascotas y alimentos para animales",null);
		Category categoriaJuguetes = new Category("Juguetes", "Juguetes y juegos para niños",null);
		Category categoriaHogar = new Category("Artículos para el Hogar", "Artículos variados para el hogar",null);
		Category categoriaCarnesPescados = new Category("Carnes y Pescados", "Productos frescos de carne y pescado",null);
		Category categoriaBebidasNoAlcoholicas = new Category("Bebidas No Alcohólicas", "Refrescos, jugos y otras bebidas sin alcohol",null);
		Category categoriaDulcesSnacks = new Category("Dulces y Snacks", "Snacks, chocolates y productos dulces",null);
		Category categoriaProductosOrgánicos = new Category("Productos Orgánicos", "Productos alimenticios orgánicos y saludables",null);
		Category categoriaProductosSinGluten = new Category("Productos Sin Gluten", "Productos aptos para personas con intolerancia al gluten",null);
		Category categoriaProductosSinLactosa = new Category("Productos Sin Lactosa", "Productos aptos para personas con intolerancia a la lactosa",null);
		Category categoriaHigienePersonal = new Category("Higiene Personal", "Productos de higiene personal y cuidado íntimo",null);
		Category categoriaArticulosDeportivos = new Category("Artículos Deportivos", "Equipamiento deportivo y accesorios",null);
		Category categoriaElectronicsAccesorios = new Category("Electrónicos y Accesorios", "Dispositivos electrónicos y accesorios tecnológicos",null);
		Category categoriaRopaCalzado = new Category("Ropa y Calzado", "Ropa de moda, calzado y accesorios de vestir",null);
		Category categoriaLibrosRevistas = new Category("Libros y Revistas", "Libros, revistas y material de lectura",null);
		Category categoriaFarmacia = new Category("Farmacia", "Medicamentos y productos de cuidado de la salud",null);
		Category categoriaHerramientas = new Category("Herramientas", "Herramientas y suministros para el hogar y jardín",null);
		Category categoriaBellezaCuidadoPersonal = new Category("Belleza y Cuidado Personal", "Productos de belleza y cuidado personal",null);
		Category categoriaAutomotriz = new Category("Automotriz", "Productos y accesorios para automóviles",null);
		Category categoriaElectrodomesticosCocina = new Category("Electrodomésticos de Cocina", "Electrodomésticos para la cocina y utensilios",null);
		Category categoriaInstrumentosMusicales = new Category("Instrumentos Musicales", "Instrumentos musicales y accesorios",null);
		Category categoriaRopaDeportiva = new Category("Ropa Deportiva", "Ropa y accesorios para actividades deportivas",null);
		Category categoriaViajesEquipaje = new Category("Viajes y Equipaje", "Artículos para viajes y equipaje",null);
		Category categoriaDecoracionHogar = new Category("Decoración del Hogar", "Artículos de decoración para el hogar",null);

		categoryRepository.saveAll(List.of(
				categoriaLimpieza, categoriaBebidasAlcoholicas, categoriaPanaderia,
				categoriaFrutasVerduras,
				categoriaCongelados, categoriaCuidadoPersonal, categoriaElectrodomesticos, categoriaMascotas,
				categoriaJuguetes, categoriaHogar, categoriaCarnesPescados, categoriaBebidasNoAlcoholicas,
				categoriaDulcesSnacks, categoriaProductosOrgánicos, categoriaProductosSinGluten, categoriaProductosSinLactosa,
				categoriaHigienePersonal, categoriaArticulosDeportivos, categoriaElectronicsAccesorios, categoriaRopaCalzado,
				categoriaLibrosRevistas, categoriaFarmacia, categoriaHerramientas, categoriaBellezaCuidadoPersonal,
				categoriaAutomotriz, categoriaElectrodomesticosCocina, categoriaInstrumentosMusicales, categoriaRopaDeportiva,
				categoriaViajesEquipaje, categoriaDecoracionHogar
		));





	}
}
