package dev.anthonysoo.personalWebsite.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.view.InternalResourceView;

@Controller
public class WebController {

    public WebController() {}

    @GetMapping("/")
    public View index() {
        return new InternalResourceView("/index.html");
    }
}
