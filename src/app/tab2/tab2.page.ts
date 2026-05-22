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
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
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
export class Tab2Page implements OnInit {
  products: any[] = [];
  currentIndex: number = 0; // Controla qual produto está na tela

  constructor(private fakeStoreService: FakeStoreService) {}

  ngOnInit() {
    this.fakeStoreService.getProducts().subscribe({
      next: (data: any[]) => {
        this.products = data; 
        console.log('PRODUTOS DA API:', data);
      },
      error: (err: any) => {
        console.error('Erro ao buscar produtos:', err);
      }
    });
  }

  nextProduct() {
    if (this.currentIndex < this.products.length - 1) {
      this.currentIndex++;
    }
  }

  prevProduct() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}