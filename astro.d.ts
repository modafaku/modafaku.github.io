// astro.d.ts
declare namespace App {
    interface Locals {
      runtime: string; // Replace 'string' with the appropriate type for 'runtime'
      user?: {
        name: string;
        surname: string;
      };
    }
  }
  