import { PanelCtrl } from 'grafana/app/plugins/sdk';
import moment from 'moment';
import './css/panel.css';

export class TemplateCtrl extends PanelCtrl {
  static templateUrl = 'partials/module.html';

  constructor($scope, $injector) {
    super($scope, $injector);
    this.updateClock();
  }

  updateClock() {
    this.time = moment().format('hh:mm:ss');
    this.$timeout(() => { this.updateClock(); }, 1000);
  }
}