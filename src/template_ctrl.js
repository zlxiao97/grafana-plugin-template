import { PanelCtrl } from 'grafana/app/plugins/sdk';
import moment from 'moment';
import _ from 'lodash';
import './css/panel.css';

const panelDefaults = {
  fontsize: 12,
  bgColor: null
};

export class TemplateCtrl extends PanelCtrl {
  static templateUrl = 'partials/module.html';
  static scrollable = true;

  constructor($scope, $injector) {
    super($scope, $injector);
    _.defaults(this.panel, panelDefaults);
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.updateClock();
  }

  onInitEditMode(){
    this.addEditorTab('Options', 'public/plugins/grafana-template-panel/partials/options.html', 2);
  }

  updateClock() {
    this.time = moment().format('hh:mm:ss');
    this.$timeout(() => { this.updateClock(); }, 1000);
  }
}