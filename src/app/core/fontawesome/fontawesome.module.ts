import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Iconos
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheckCircle,
  faClipboardList,
  faSignOutAlt,
  faTable,
  faTachometerAlt,
  faMoneyBillAlt,
  faExclamationCircle,
  faShippingFast,
  faSave,
  faSpinner,
  faTrashAlt,
  faBuilding,
  faHeart,
  faBell,
  faFileAlt,
  faBookmark,
  faChartPie,
  faBars
} from '@fortawesome/free-solid-svg-icons';

// Add an icon to the library for convenient access in other components
library.add(
  faCheckCircle,
  faClipboardList,
  faSignOutAlt,
  faTable,
  faTachometerAlt,
  faMoneyBillAlt,
  faExclamationCircle,
  faShippingFast,
  faSave,
  faSpinner,
  faTrashAlt,
  faBuilding,
  faHeart,
  faBell,
  faFileAlt,
  faBookmark,
  faChartPie,
  faBars
);

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [],
  exports: [FontAwesomeModule]
})
export class FontawesomeModule {}
