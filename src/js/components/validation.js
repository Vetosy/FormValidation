import {
  validateForms
} from '../functions/validate-forms';

const rules = [{
    ruleSelector: '.input-name',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Заполните имя!'
    }]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Заполните телефон!'
    }]
  },
  {
    ruleSelector: '.input-email',
    rules: [{
        rule: 'required',
        value: true,
        errorMessage: 'Заполните Email!'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный Email!'
      },
    ]
  },
  {
    ruleSelector: '.input-file',
    rules: [{
        rule: 'minFilesCount',
        value: 1,
        errorMessage: 'Прикрепите файл!'
      },
      {
        rule: 'files',
        value: {
          files: {
            types: ['image/jpeg', 'image/jpg', 'image/png'],
            extensions: ['jpeg', 'jpg', 'png'],
            maxSize: 1000000
          },
        },
        errorMessage: 'Файл не прикреплен!'
      },
    ]
  },
  {
    ruleSelector: '.input-textarea',
    rules: [{
        rule: 'required',
        value: true,
        errorMessage: 'Заполните форму!'
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Текст должен быть не менее 3 символов!',
      },
    ]
  }
];

const fileInput = document.querySelector('input[type="file"]')

fileInput.addEventListener('change', (e) => {
  let files = e.currentTarget.files

  if (files.length) {
    fileInput.closest('label').querySelector('span').textContent = files[0].name
  } else {
    fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл'
  }
})


validateForms('.form', rules);
