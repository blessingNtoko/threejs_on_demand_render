import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public scene = new THREE.Scene();
  public renderer = new THREE.WebGLRenderer();
  public camera = new THREE.PerspectiveCamera();
  public orbControls = new OrbitControls(this.camera, this.renderer.domElement);

  ngOnInit() {

  }

  public init() {

  }
}
