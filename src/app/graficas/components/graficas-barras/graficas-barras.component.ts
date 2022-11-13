import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-graficas-barras',
  templateUrl: './graficas-barras.component.html',
  styleUrls: ['./graficas-barras.component.css']
})
export class GraficasBarrasComponent implements OnInit {

  @Input() horizontal: boolean = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];
 
  @Input() barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [],
  };

  constructor() {
    
    
  }

  ngOnInit(): void {
  
  }

}
