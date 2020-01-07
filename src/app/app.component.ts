import { AfterViewInit, Component, Injector, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubheaderComponentFactoryResolver } from './common/service/subheader-component-factory-resolver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(RouterOutlet, { static: true }) routerOutlet: RouterOutlet;
  @ViewChild('subheader', { static: true, read: ViewContainerRef }) subheader: ViewContainerRef;
  @ViewChild('titleSubheader', { static: true, read: TemplateRef }) titleSubheader: TemplateRef<any>;

  constructor(private injector: Injector,
              private componentResolverFactory: SubheaderComponentFactoryResolver) {
  }

  ngAfterViewInit(): void {
    this.routerOutlet.activateEvents.subscribe(() => {
      const { subheader } = this.routerOutlet.activatedRouteData;
      if (typeof subheader === 'string') {
        this.renderSubheaderTitle(subheader);
      } else if (subheader) {
        const { component: componentType } = this.routerOutlet.activatedRoute;
        const component = this.routerOutlet.component;

        this.renderSubheaderComponent(subheader, componentType, component);
      }
    });

  }

  private renderSubheaderTitle(title: string) {
    this.subheader.createEmbeddedView(this.titleSubheader, {
      $implicit: title
    });
  }

  private renderSubheaderComponent<T>(subheader: Type<any>, componentType: Type<any> | string, component: T) {
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        {
          provide: componentType,
          useValue: component
        }
      ]
    });

    const componentFactory = this.componentResolverFactory.resolveComponentFactory(subheader);

    this.subheader.createComponent(componentFactory, null, injector);
  }
}
