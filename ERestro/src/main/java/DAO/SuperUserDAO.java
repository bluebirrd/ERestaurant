package DAO;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import com.bionic.edu.ERestro.Customer;
import com.bionic.edu.ERestro.Employee;
import com.bionic.edu.ERestro.Rights;

public class SuperUserDAO implements EmployeeDAO {
	@PersistenceUnit
	private EntityManager em1;

	public Rights login(String email, String password) {
		Employee employee = null;
		TypedQuery<Employee> query = em1.createQuery(
				"SELECT u FROM Users u WHERE (email=:mail)", Employee.class);
		// try {
		query.setParameter("mail", email);
		employee = query.getSingleResult();
		if (employee == null) {
			return null;
		} else if (employee.getPassword().equals(password)) {
			return employee.getAccess();
		} else {
			return null;
		}
		/*
		 * } finally { em1.close(); }
		 */
	}
	
	public List<Customer> getCustomersList() {
		List<Customer> customers = new ArrayList<Customer>();
		TypedQuery<Customer> query = em1.createQuery("SELECT c FROM Customer c",Customer.class);
		customers = query.getResultList();
		return customers;
	}
	
	public List<Employee> getEmployeesList() {
		List<Employee> employees = new ArrayList<Employee>();
		TypedQuery<Employee> query = em1.createQuery("Select u from Users u",Employee.class);
		employees = query.getResultList();
		return employees;
	}
	
	public void saveCustomer(Customer customer) {
		int id = customer.getId();
		if (id==0) {
			em1.persist(customer);
		} else {
			Customer customerUpdate = em1.find(Customer.class, id);
			em1.getTransaction().begin();
			customerUpdate.setName(customer.getName());
			customerUpdate.setEmail(customer.getEmail());
			customerUpdate.setBillingAddress(customer.getBillingAddress());
			customerUpdate.setBirthDate(customer.getBirthDate());
			customerUpdate.setPassword(customer.getPassword());
			customerUpdate.setValid(customer.getValid());
			em1.getTransaction().commit();
		}
	}
	
	public void saveEmployee(Employee employee) {
		int id = employee.getId();
		if (id==0) {
			em1.persist(employee);
		} else {
			Employee employeeUpdate = em1.find(Employee.class, id);
			em1.getTransaction().begin();
			employeeUpdate.setName(employee.getName());
			employeeUpdate.setEmail(employee.getEmail());
			employeeUpdate.setAccess(employee.getAccess());
			employeeUpdate.setBirthDate(employee.getBirthDate());
			employeeUpdate.setPassword(employee.getPassword());
			employeeUpdate.setValid(employee.isValid());
			em1.getTransaction().commit();
		}
	}
}
