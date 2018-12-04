package com.uncc.partystore.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "custom_cart")
public class CustomCart {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String category;
	String email;
	String price;
	@Column(name = "cake_bread")
	String cakeBread;
	@Column(name = "cake_toppings")
	String cakeToppings;
	@Column(name = "cake_description")
	String cakeDescription;
	@Column(name = "tshirt_style")
	String tshirtStyle;
	@Column(name = "tshirt_color")
	String tshirtColor;
	@Column(name = "tshirt_font")
	String tshirtFont;
	@Column(name = "tshirt_text")
	String tshirtText;
	@Column(name = "tshirt_font_size")
	String tshirtFontSize;

	public CustomCart() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getCakeBread() {
		return cakeBread;
	}

	public void setCakeBread(String cakeBread) {
		this.cakeBread = cakeBread;
	}

	public String getCakeToppings() {
		return cakeToppings;
	}

	public void setCakeToppings(String cakeToppings) {
		this.cakeToppings = cakeToppings;
	}

	public String getCakeDescription() {
		return cakeDescription;
	}

	public void setCakeDescription(String cakeDescription) {
		this.cakeDescription = cakeDescription;
	}

	public String getTshirtStyle() {
		return tshirtStyle;
	}

	public void setTshirtStyle(String tshirtStyle) {
		this.tshirtStyle = tshirtStyle;
	}

	public String getTshirtColor() {
		return tshirtColor;
	}

	public void setTshirtColor(String tshirtColor) {
		this.tshirtColor = tshirtColor;
	}

	public String getTshirtFont() {
		return tshirtFont;
	}

	public void setTshirtFont(String tshirtFont) {
		this.tshirtFont = tshirtFont;
	}

	public String getTshirtText() {
		return tshirtText;
	}

	public void setTshirtText(String tshirtText) {
		this.tshirtText = tshirtText;
	}

	public String getTshirtFontSize() {
		return tshirtFontSize;
	}

	public void setTshirtFontSize(String tshirtFontSize) {
		this.tshirtFontSize = tshirtFontSize;
	}

	

}
