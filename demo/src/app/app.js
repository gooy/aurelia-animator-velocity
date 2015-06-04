import 'prism/themes/prism-okaidia.css!';

export class App {

  configureRouter(config, router){

    config.title = 'aurelia-animator-velocity';
    config.map([
      { route: ['','home'],  moduleId: './home',      nav: true, title:'Home' },
      { route: 'settings',  moduleId: './settings',      nav: true, title:'Settings' }
    ]);

    this.router = router;
  }

}
