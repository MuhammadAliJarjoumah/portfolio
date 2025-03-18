import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[image-place-holder]'
})
export class ImagePlaceholderDirective {
  @Input({ required: true }) mainImageUrl: string; // Main image source
  @Input() placeholder: string = 'images/placeholder_small_dark.jpg'; // Default placeholder image
  @Input() errorImage: string = 'images/error-placeholder.jpg'; // Error fallback image
  private isLoaded: boolean = false; // Flag to track if image has loaded

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.applyShimmerEffect();
    this.setImagePlaceholder();
  }

  // Apply shimmer effect initially
  private applyShimmerEffect() {
    const img = this.el.nativeElement as HTMLImageElement;
    this.renderer.addClass(img, 'shimmer'); // Add shimmer class
    console.log('Shimmer effect applied');
  }

  // Set the placeholder while the image loads
  private setImagePlaceholder() {
    const img = this.el.nativeElement as HTMLImageElement;
    img.src = this.placeholder;
  }

  // On image load, remove shimmer and set the actual image
  @HostListener('load') onImageLoad() {
    console.log('Image loaded');
    if (!this.isLoaded) { // Ensure this runs only once
      const img = this.el.nativeElement as HTMLImageElement;
      this.renderer.removeClass(img, 'shimmer'); // Remove shimmer effect
      this.isLoaded = true; // Mark as loaded
      console.log('Shimmer effect applied');
      img.src = this.mainImageUrl; // Set the main image
    }
  }
  // On error, remove shimmer and set error fallback image
  @HostListener('error') onImageError() {
    const img = this.el.nativeElement as HTMLImageElement;
    this.renderer.removeClass(img, 'shimmer'); // Remove shimmer effect
    img.src = this.errorImage;
  }
}
