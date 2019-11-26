import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr:ToastrService) { }

    success(title :string,message?:string)
    {
      this.toastr.success(title,message);
    }
    error(title :string,message?:string)
    {
      this.toastr.error(title,message);
    } 

}
