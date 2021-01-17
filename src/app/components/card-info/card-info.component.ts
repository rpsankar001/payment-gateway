import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/shared/store/reducers/card-info.reducer';
import { PaymentServiceService } from 'src/app/services/payment-service.service';
import { loadCardInfos } from 'src/app/shared/store/actions/card-info.actions';
import { selectCardInfo } from 'src/app/shared/store/selectors/card-info.selectors';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CardInfo } from '../../shared//models/card-info';


@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {
  cardInfoForm: FormGroup;
  card_info$: any;
  modelDate = '';
  submitted: boolean;

  constructor(private store: Store<State>,
    private service: PaymentServiceService,
    private toastr: ToastrService,
    private router: Router) {

    this.store.pipe(select(selectCardInfo)).subscribe((res) => {
      this.card_info$ = res;
    });
    this.cardInfoForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      card_number: new FormControl(this.card_info$?.card_number || '', Validators.required),
      card_holder: new FormControl(this.card_info$?.card_holder || '', Validators.required),
      expiry_date: new FormControl(this.card_info$?.expiry_date || '', Validators.required),
      security_code: new FormControl(this.card_info$?.security_code || '',
        [ Validators.minLength(3), Validators.maxLength(3)]),
      amount: new FormControl(this.card_info$?.amount || '', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    });
  }


  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if (this.cardInfoForm.valid) {
      // Post Req
      this.service.updatePaymentRequest(this.cardInfoForm.getRawValue());
      this.store.dispatch(loadCardInfos(this.cardInfoForm.getRawValue()));
      this.router.navigate(['/']);
      this.showToaster();
    }

  }

  showToaster() {
    this.toastr.success();
    this.toastr.show('Payment proceeded successfully!!!', null, null, 'success');
  }

  onOpenCalendar(container) {
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    };
    container.setViewMode('month');
  }

}
