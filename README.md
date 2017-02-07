#ngPluralForm [![Dependency Status](https://gemnasium.com/badges/github.com/asleepwalker/ng-plural-form.svg)](https://gemnasium.com/github.com/asleepwalker/ng-plural-form)

[Angular](https://angularjs.org/) filter to display correct grammatical case for word's plural form in Slavic languages.

##Usage

In HTML:

	{{ number | pluralForm: ['штука', 'штуки', 'штук'] }}

In JavaScript:

	$filter('pluralForm')(number, ['штука', 'штуки', 'штук']);

### <a href="http://asleepwalker.github.io/ng-plural-form/">Demo</a>

##License

The MIT License.