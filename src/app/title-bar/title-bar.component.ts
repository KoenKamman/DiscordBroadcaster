import {Component, OnInit} from '@angular/core';
import {ElectronService} from 'ngx-electron';
import BrowserWindow = Electron.BrowserWindow;

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {
  private win: BrowserWindow;

  constructor(private _electronService: ElectronService) {
    this.win = this._electronService.remote.getCurrentWindow();
  }

  ngOnInit() {
  }

  minimizeWindow() {
    this.win.minimize();
  }

  maximizeWindow() {
    if (!this.win.isMaximized()) {
      this.win.maximize();
    } else {
      this.win.unmaximize();
    }
  }

  closeWindow() {
    this.win.close();
  }

}
