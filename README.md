## Quickbox, a ChoiceScript Extension
Quickbox is an extension to [ChoiceScript](https://github.com/dfabulich/choicescript) by Dan Fabulich. This extension allows developers and writers access to otherwise obscured functionalities in ChoiceScript.

### Features
- On-the-fly theme switching (`theme`)
- Toggleable page-switch animations (`animate`)
- Zoom in and out; resize global font size (`bigger_text`, `smaller_text`)
- Hide buttons in runtime. Make your players tremble by hiding their stats when their characters are stripped of power! (`hide_buttons`, `show_buttons`)
- Extended formatting support. You can now add underlines, strikethrough, and many more to your texts!

### Installation
1. Download the latest copy of Quickbox. You can do this either by cloning this git repository, or you may also download it directly by [saving this page](https://raw.githubusercontent.com/wordmage/quickbox-cs/master/quickbox.min.js)
2. Copy this file to your `web` directory of your ChoiceScript install
3. In the same `web` directory, navigate to the `mygame` directory
4. Find and open `index.html`, then scroll down until you can find the line `<script src="mygame.js"></script>`
5. Put the following above said line: `<script src="../quickbox.min.js"></script>`
6. Run your game!

### Disclaimer
> I am not affiliated with ChoiceScript, Dan Fabulich, or those that have worked with ChoiceScript. Please do **NOT** report any bugs and issues you encounter whilst using this extension in the official ChoiceScript GitHub page.