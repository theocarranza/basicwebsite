import { SkillsService } from './../skills/skills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  providers: [SkillsService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /* @todo structure the sections using an objetct */
  private section_about: {};
  private section_portfolio: {};
  private section_services: {};
  private services_list: {};
  private portfolio_list: {};
  private skills_list: {};
  private page: {};

  constructor(private skillsService: SkillsService) {
    this.section_about = {
      'title': 'Quem Sou eu?',
      'header': 'Um pouco sobre mim',
      'name': 'Théo Carranza',
      'email': 'theocarranza@gmail.com',
      'job_title': 'Desenvolvedor Full Stack',
      'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }

    this.section_services = {
      'title': 'Serviços',
      'header': 'Serviços que eu ofereço',
    }

    this.section_portfolio = {
      'title': 'Portfolio',
      'header': 'Trabalhos de destaque',
    }

    this.services_list = [
      {
        'title': 'Software',
        'img': '../assets/images/code_small.png',
        'card_title': 'Desenvolvimento e automação',
        'text_service': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        'title': 'Websites',
        'img': '../assets/images/website.png',
        'card_title': 'Wordpress',
        'text_service': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        'title': 'Infra-estrutura',
        'img': '../assets/images/website.png',
        'card_title': 'Suporte técnico',
        'text_service': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        'title': 'Tradução',
        'img': '../assets/images/translation.png',
        'card_title': 'Artigos científicos',
        'text_service': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      }
    ]

    this.portfolio_list = [
      {
        'title': 'Prefeitura Municipal de Boa Vista',
        'img': '../assets/images/website.png',
        'card_title': 'Desenvolvedor WEB Full Stack',
        'card_text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        'title': 'Governo do estado do Maranhão',
        'img': '../assets/images/website.png',
        'card_title': 'Desenvolvedor WEB Full Stack',
        'card_text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        'title': 'Prefeitura Municipal de Boa Vista',
        'img': '../assets/images/website.png',
        'card_title': 'Desenvolvedor WEB',
        'card_text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        'title': 'Prefeitura Municipal de Boa Vista',
        'img': '../assets/images/website.png',
        'card_title': 'Desenvolvedor WEB',
        'card_text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
    ]

  }

  ngOnInit() {

    this.skillsService.getList()
    .subscribe(response => this.skills_list = response)
    // .subscribe(response => console.log(response))
  }

}
