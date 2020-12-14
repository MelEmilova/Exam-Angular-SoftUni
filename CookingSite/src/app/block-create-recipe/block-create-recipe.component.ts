import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth-service.service';

@Component({
  selector: 'app-block-create-recipe',
  templateUrl: './block-create-recipe.component.html',
  styleUrls: ['./block-create-recipe.component.css']
})
export class BlockCreateRecipeComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
