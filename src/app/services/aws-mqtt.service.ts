import {Injectable} from '@angular/core';
import {CognitoIdentityCredentials} from "aws-sdk/global";
import {AWS} from "../../environments/environment";
import {AWSMqttClient} from 'aws-mqtt';

@Injectable({
  providedIn: 'root'
})
export class AwsMqttService {
  constructor() { }
  private client: AWSMqttClient;

  private setUpCredentials() {
    AWS.config.region = 'us-east-1';
    AWS.config.credentials = new CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:5ca8ecf0-77d5-4054-b6d4-432b40e62fb8',
    });
  }

  public getMQTTClient() {
    if(!this.client) {
      this.client = this.createClient()
    }
    return this.client;
  }

  private createClient() {
    this.setUpCredentials();

    return new AWSMqttClient({
      region: AWS.config.region,
      credentials: AWS.config.credentials,
      endpoint: 'a12ejgff2slvq5-ats.iot.us-east-1.amazonaws.com', // NOTE: get this value with `aws iot describe-endpoint`
      expires: 600, // Sign url with expiration of 600 seconds
      clientId: 'mqtt-client-' + (Math.floor((Math.random() * 100000) + 1)), // clientId to register with MQTT broker. Need to be unique per client
      will: {
        topic: 'semaphore',
        payload: 'Connection Closed abnormally..!',
        qos: 0,
        retain: false
      }
    });
  }
}
