
interface LoadedScripts {
  [key: string]: boolean;
}

class ScriptLoader {
  private loadedScripts: LoadedScripts = {};
  private loadingPromises: { [key: string]: Promise<void> } = {};

  async loadScript(src: string, id: string): Promise<void> {
    // Return immediately if already loaded
    if (this.loadedScripts[id]) {
      return Promise.resolve();
    }

    // Return existing promise if currently loading
    if (this.loadingPromises[id]) {
      return this.loadingPromises[id];
    }

    // Create new loading promise
    this.loadingPromises[id] = new Promise((resolve, reject) => {
      // Check if script already exists in DOM
      const existingScript = document.querySelector(`script[src="${src}"]`);
      if (existingScript) {
        this.loadedScripts[id] = true;
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      
      script.onload = () => {
        this.loadedScripts[id] = true;
        resolve();
      };
      
      script.onerror = () => {
        delete this.loadingPromises[id];
        reject(new Error(`Failed to load script: ${src}`));
      };
      
      document.head.appendChild(script);
    });

    return this.loadingPromises[id];
  }

  isLoaded(id: string): boolean {
    return this.loadedScripts[id] || false;
  }
}

export const scriptLoader = new ScriptLoader();
