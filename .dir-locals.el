((nil .
   ;; Assign to this variable dynamically
   ((eval .
      '(setq flycheck-javascript-eslint-executable
        (expand-file-name (concat default-directory "node_modules/.bin/eslint")))))))