package com.aliis;

import com.aliis.model.Ticket;
import com.aliis.repository.TicketRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
import java.util.Optional;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BackendApplicationTests {

	@Autowired
	private TicketRepository ticketRepository;

	@Test
	public void testSave() {
		List<Ticket> tickets = ticketRepository.findAll();
		Ticket ticket = new Ticket();
		ticket.setTitle("tere");
		ticket.setDescription("tere");
		ticketRepository.save(ticket);
		Assert.assertEquals(tickets.size() + 1, ticketRepository.findAll().size());
	}

	@Test
	public void testEdit() {
		Ticket ticket1 = new Ticket();
		ticket1.setTitle("title1");
		ticket1.setDescription("title1");
		ticketRepository.save(ticket1);
		List<Ticket> tickets  = ticketRepository.findAll();
		Ticket ticket = tickets.get(0);
		Assert.assertEquals(ticket1.getTitle(), ticket.getTitle());
		ticket.setTitle("title2");
		ticketRepository.save(ticket1);
		tickets  = ticketRepository.findAll();
		ticket = tickets.get(0);
		Assert.assertEquals(ticket1.getTitle(), ticket.getTitle());
	}

	@Test
	public void testDelete() {
		Ticket ticket1 = new Ticket();
		ticket1.setTitle("title1");
		ticket1.setDescription("title1");
		ticketRepository.save(ticket1);
		Ticket ticket2 = new Ticket();
		ticket2.setTitle("title2");
		ticket2.setDescription("title2");
		ticketRepository.save(ticket2);
		List<Ticket> tickets = ticketRepository.findAll();
		Ticket ticket = tickets.get(0);
		ticketRepository.deleteById(ticket.getId());
		Assert.assertEquals(tickets.size() - 1, ticketRepository.findAll().size());
	}
}
