import { defineMessages } from 'react-intl';

const defaultLocale = 'en';

const defaultMessages = defineMessages({"type":{"id":"type","defaultMessage":"English"},"comments":{"id":"comments","defaultMessage":"Comments "},"loading":{"id":"loading","defaultMessage":"Loading..."},"descriptionForceRefrech":{"id":"description.force_refrech","defaultMessage":"Force Refresh of All Comments."},"descriptionSupportMarkdown":{"id":"description.support_markdown","defaultMessage":"Text supports Github Flavored Markdown."},"descriptionDeleteRule":{"id":"description.delete_rule","defaultMessage":"Comments older than 24 hours are deleted."},"descriptionSubmitRule":{"id":"description.submit_rule","defaultMessage":"Name is preserved. Text is reset, between submits."},"descriptionSeeActionCable":{"id":"description.see_action_cable","defaultMessage":"To see Action Cable instantly update two browsers, open two browsers and submit a comment!"},"formHorizontal":{"id":"form.horizontal","defaultMessage":"Horizontal Form"},"formStacked":{"id":"form.stacked","defaultMessage":"Stacked Form"},"formInline":{"id":"form.inline","defaultMessage":"Inline Form"},"inputNameLabel":{"id":"input.name.label","defaultMessage":"Name"},"inputNamePlaceholder":{"id":"input.name.placeholder","defaultMessage":"Your Name"},"inputTextLabel":{"id":"input.text.label","defaultMessage":"Text"},"inputTextPlaceholder":{"id":"input.text.placeholder","defaultMessage":"Say something using markdown..."},"inputSaving":{"id":"input.saving","defaultMessage":"Saving"},"inputPost":{"id":"input.post","defaultMessage":"Post"},"errorsUnavailableSession":{"id":"errors.unavailable_session","defaultMessage":"Session {id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store {id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"errorsUnacceptableRequest":{"id":"errors.unacceptable_request","defaultMessage":"A supported version is expected in the Accept header.\n"},"errorsConnectionRefused":{"id":"errors.connection_refused","defaultMessage":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n"}});

export { defaultMessages, defaultLocale };
