import {Component, OnInit} from '@angular/core';
import {AwsMqttService} from "./services/aws-mqtt.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WebIOT';

  constructor(private mqtt: AwsMqttService) {
  }
  ngOnInit() {
    const client = this.mqtt.getMQTTClient();
    client.on('connect', () => {
      client.subscribe('/semaphore')
    })

    client.on('message', (topic, message) => {
      console.log(topic, message);
    })
  }
}
