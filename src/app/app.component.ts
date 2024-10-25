import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importation de CommonModule pour ngIf, ngFor
import { HttpClient, HttpClientModule } from '@angular/common/http';  // Ajoutez HttpClientModule ici
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],  // Ajoutez CommonModule ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client-app-annuaire-entreprise';
  entreprises: any[] = []
  
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getEntreprises().subscribe(
      data => this.entreprises = data,
      error => console.error('Erreur lors de la récupération des données:', error)
    );
  }
}
