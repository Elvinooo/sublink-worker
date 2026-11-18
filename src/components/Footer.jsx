/** @jsxRuntime automatic */
/** @jsxImportSource hono/jsx */
import { APP_NAME, GITHUB_REPO, DOCS_URL, APP_VERSION } from '../constants.js';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer class="mt-12 py-8 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div class="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-gray-600 dark:text-gray-400 text-center md:text-left">
                        <span class="text-sm">© {currentYear} {APP_NAME}. All rights reserved.</span>

                    </div>

                    <div class="flex items-center gap-6">

                            <i class="fas fa-book text-lg"></i>
                        </a>
                            <i class="fab fa-github text-lg"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
