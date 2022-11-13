import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      //{ data: [ 350, 450, 100 ] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private api: GraficasService) { }

  ngOnInit(): void {
    /*
    this.api.getDataDona()
      .subscribe(data => {
        console.log(data);
        const key = Object.keys(data);
        const values = Object.values(data);
        this.doughnutChartData.labels = key;
        this.doughnutChartData.datasets.push({data: values})
        
      })*/

      this.api.getUserDona()
        .subscribe(({key, values}) => {
          this.doughnutChartData.labels = key;
          this.doughnutChartData.datasets.push({data: values})
        })
  }

}
