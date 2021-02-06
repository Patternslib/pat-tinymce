# pat-tinymce

## Documentation

TinyMCE text editor pattern.


### Options reference

| Property       | Default Value | Values      | Type    | Description                                                         |
| -------------- | ------------- | ----------- | ------- | ------------------------------------------------------------------- |
| inline         | false         | true, false | Boolean | Initializes TinyMCE in iframe mode (default) or inline mode (true). |
| content-css    | false         | URL         | String  | URL to the css used for the content in TinyMCE. Ignored in inline mode. If not given, uses a default from a cloudflare CDN. |
| plugins        | []            |             | Array   | List of plugins to load.                                            |


## Examples

### TinyMCE in iframe mode

<textarea class="pat-tinymce" data-pat-tinymce="inline: false">
this is a non-inline / iframe instance of tinymce.
</textarea>

```html
<textarea class="pat-tinymce" data-pat-tinymce="inline: false">
this is a non-inline / iframe instance of tinymce.
</textarea>
```

### TinyMCE in inline mode

<textarea class="pat-tinymce" data-pat-tinymce="inline: true">
this is a non-inline / iframe instance of tinymce.
</textarea>

```html
<textarea class="pat-tinymce" data-pat-tinymce="inline: true">
this is a non-inline / iframe instance of tinymce.
</textarea>
```

