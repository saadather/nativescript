import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `<page-router-outlet></page-router-outlet>`
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.setTranslation('en', {
      title: 'Title',
      description: 'Description',
      language: 'Choose your language',
      news: 'News',
      next: 'Next'
    });

    translate.setTranslation('es', {
      title: 'Título',
      description: 'Descripción',
      language: 'Elige tu idioma',
      news: 'Noticias',
      next: 'Siguiente'
    });

    translate.setDefaultLang('en');
  }
}
