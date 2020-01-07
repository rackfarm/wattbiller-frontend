import { ComponentFactory, ComponentFactoryResolver, Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubheaderComponentFactoryResolver extends ComponentFactoryResolver {
  private readonly resolvers = new Array<ComponentFactoryResolver>();
  private isResolving = false;

  constructor(private readonly rootResolver: ComponentFactoryResolver) {
    super();
  }

  public register(resolver: ComponentFactoryResolver) {
    this.resolvers.push(resolver);
  }

  public resolveComponentFactory<T>(component: Type<T>): ComponentFactory<T> {
    // prevent cyclic calls
    if (this.isResolving) {
      return null;
    }

    this.isResolving = true;
    try {
      return this.resolveInternal(component);
    } finally {
      this.isResolving = false;
    }
  }

  private resolveInternal<T>(component: Type<T>): ComponentFactory<T> {
    for (const resolver of this.resolvers) {
      try {
        const factory = resolver.resolveComponentFactory(component);
        if (factory) {
          return factory;
        }
      } catch {}
    }

    return this.rootResolver.resolveComponentFactory(component);
  }
}
