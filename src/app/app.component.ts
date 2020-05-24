import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { COM_CONSTANT } from '../assets/constants/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  filterPageObject: any = {
    ringStyleList: [],
    selectedRingStyle: null,
    colorTypeList: [],
    selectedColorType: null,
    productList: []
  };
  COM_CONSTANT = COM_CONSTANT;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getRingStyleData();
    this.getColorTypeData();
    this.getProductList();
  }

  getRingStyleData() {
    this.appService.fetchRingStyleData().subscribe((response: any) => {
      if (response && response.length > 0) {
        this.filterPageObject.ringStyleList = response;
      }
    });
  }

  getColorTypeData() {
    this.appService.fetchColorTypeData().subscribe((response: any) => {
      if (response && response.length > 0) {
        this.filterPageObject.colorTypeList = response;
      }
    });
  }

  getProductList() {
    this.appService.fetchProductList().subscribe((response: any) => {
      if (response && response.length > 0) {
        this.filterPageObject.productList = response;
      }
    });
  }

  onRingStyleSelect(item: any) {
    this.filterPageObject.selectedRingStyle = item.type_id;
    item.is_select = true;
    this.appService.setValueExceptSelectedItemInArray(
      this.filterPageObject.ringStyleList,
      'is_select',
      false,
      'type_id',
      item
    );
  }

  onColorTypeSelect(item: any) {
    this.filterPageObject.selectedColorType = item.type_id;
    item.is_select = true;
    this.appService.setValueExceptSelectedItemInArray(
      this.filterPageObject.colorTypeList,
      'is_select',
      false,
      'type_id',
      item
    );
  }
}
