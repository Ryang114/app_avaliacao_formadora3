import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeStoreService } from '../services/fake-store.service';
import { 
  IonContent, 
  IonCard, 
  IonCardContent, 
  IonButton,
  IonSpinner
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent, 
    IonCard, 
    IonCardContent, 
    IonButton,
    IonSpinner
  ]
})
export class Tab3Page implements OnInit {
  products: any[] = [];
  showList: boolean = false; // Controla se a lista está visível ou oculta

  constructor(private fakeStoreService: FakeStoreService) {}

  ngOnInit() {
    this.fakeStoreService.getProducts().subscribe({
      next: (data: any[]) => {
        this.products = data;
      },
      error: (err: any) => {
        console.error('Erro ao carregar todos os produtos na Tab 3:', err);
      }
    });
  }

  exibirLista() {
    this.showList = true;
  }

  ocultarLista() {
    this.showList = false;
  }
}