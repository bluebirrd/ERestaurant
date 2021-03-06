package Beans;

import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

import javax.faces.bean.*;

import org.apache.commons.codec.digest.DigestUtils;

import javax.inject.*;

import org.springframework.context.annotation.Scope;

import Services.CustomerService;

import com.bionic.edu.ERestro.Customer;

@Named
@Scope("session")
public class CustomerBean implements Serializable{
	
	
	private Customer customer;
	@Inject
	private CustomerService custService;
	private boolean loggedIn;
	private java.util.Date birthday;
	private String email;
	private String password;
	private int valid;
	private boolean birthdayToday;
	
	
	public CustomerBean() {
		customer = new Customer();
		loggedIn = false;
	}
	
	public CustomerService getCustService() {
		return custService;
	}
	
	public int getValid() {
		return valid;
	}

	public void setValid(int valid) {
		this.valid = valid;
	}

	public boolean isLoggedIn() {
		return loggedIn;
	}

	public void setLoggedIn(boolean loggedIn) {
		this.loggedIn = loggedIn;
	}

	

	public java.util.Date getBirthday() {
		return birthday;
	}

	public void setBirthday(java.util.Date birthday) {
		this.birthday = birthday;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isBirthdayToday() {
		return birthdayToday;
	}

	public void setBirthdayToday(boolean birthdayToday) {
		this.birthdayToday = birthdayToday;
	}

	public String editCustomer(String id) {
		customer = custService.findById(Integer.valueOf(id));
		birthday = customer.getBirthDate();
		valid = customer.getValid();
		return "allCustomers";
	}
	
	public String logIn() {
		customer = custService.logIn(email, password); //String pass = DigestUtils.md5Hex(password); - //this one should go into custService implementation
		if (customer.getId() != 0) {
			loggedIn = true;
			birthday = customer.getBirthDate();
			checkBirthday();
		} 
		return "index";
	}
	
	public String save() {
		customer.setValid(valid);
		customer.setBirthDate(birthday);
		custService.save(customer);
		customer = new Customer();
		birthday = null;
		return "allCustomers";
	}
	
	public String logOff() {
		loggedIn = false;
		customer = new Customer();
		return "index";
	}
	
	public void checkBirthday() {
		LocalDate today = LocalDate.now();
		
		Instant instant = Instant.ofEpochMilli(birthday.getTime());
		LocalDate birth = LocalDateTime.ofInstant(instant, ZoneId.systemDefault()).toLocalDate();

		if((today.getMonthValue()==birth.getMonthValue())&&(today.getDayOfMonth()==birth.getDayOfMonth())) {
			birthdayToday = true;
		} else {
			birthdayToday = false;
		}
			
		
	}

}
