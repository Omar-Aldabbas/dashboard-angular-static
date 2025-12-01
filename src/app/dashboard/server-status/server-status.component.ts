import { CommonModule } from '@angular/common';
import {
  Component,
  DestroyRef,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  isOpen = false;
  isMobile = window.innerWidth < 768;
  // private interval?: NodeJS.Timeout;
  private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  statusArray: string[] = ['online', 'offline', 'unknown'];
  currentValue = 0;
  currentStatus: string = this.statusArray[this.currentValue];
  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.currentValue >= 2 ? (this.currentValue = 0) : this.currentValue++;
      this.currentStatus = this.statusArray[this.currentValue];
    }, 1500);
    this.destroyRef.onDestroy(() => {
      clearInterval(this.interval);
    });
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }

  @HostListener('window:resize') onResize() {
    this.isMobile = window.innerWidth < 768;
  }

  openList() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
