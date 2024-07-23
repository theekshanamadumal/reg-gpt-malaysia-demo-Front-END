import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AiModelModel } from 'src/app/core/models/ai-model.model';
import { UserModel } from 'src/app/core/models/user.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { getLoggedInUser, clearUser } from 'src/app/shared/helpers/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() models: Array<AiModelModel>;
  @Input() selectedModel: AiModelModel;
  @Output() onLogout: EventEmitter<any> = new EventEmitter();
  @Output() onChangeModel: EventEmitter<any> = new EventEmitter();

  user: UserModel;

  constructor(
    private authenticationService: AuthenticationService, 
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.user = getLoggedInUser();
  }

  logout(){
      this.router.navigate(['']);

  }

  // changeModel(model: AiModelModel){
  //   this.onChangeModel.emit(model);
  // }

}
