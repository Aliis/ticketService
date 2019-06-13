package com.aliis.controller;


import com.aliis.model.Ticket;
import com.aliis.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;


@RestController
@RequestMapping(path = "/api")
public class TicketController {

    @Autowired
    private TicketRepository ticketRepository;

    @PostMapping("/save")
    public void saveNewTicket(@RequestBody @Valid Ticket ticket){
        ticket.setDate(new Date());
        ticketRepository.save(ticket);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTicket(@PathVariable Integer id) {
        ticketRepository.deleteById(id);
    }

    @GetMapping("/show")
    public List<Ticket> show(){
        return ticketRepository.findAll();
    }
}
