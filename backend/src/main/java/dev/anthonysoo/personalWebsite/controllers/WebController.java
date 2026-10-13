package dev.anthonysoo.personalWebsite.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebController {

    public WebController() {}

    @GetMapping("/")
    public String index() {
        return "Hello World!";
    }
}
