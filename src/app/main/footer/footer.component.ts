import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ISocialAccount } from '../models/social-account.interface';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-footer',
  imports: [SharedModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  accounts: ISocialAccount[] = [];

  constructor(private _MainService: MainService) {

  }
  ngOnInit(): void {
    this.getMyAccounts();
  }

  getMyAccounts() {
    this.accounts = this._MainService.getMyAccounts();
  }
}
