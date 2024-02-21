package com.api.Inventario.models.dto.entity;

import com.api.Inventario.models.dto.entity.base.Base;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tiket")
public class Ticket extends Base {


private String name;

	@Override
	public String toString() {
		return "Tiket{" +
				"name='" + name + '\'' +
				'}';
	}
}