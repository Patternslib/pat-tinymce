# Changelog



## [3.0.0](https://github.com/patternslib/pat-tinymce/compare/3.0.0-alpha.0...3.0.0) (2022-06-28)


### Maintenance


* @patternslib/patternslib needs to be installed. Adding to devDependencies to avoid version clashes with other packages depending on it. ([f24ae0e](https://github.com/patternslib/pat-tinymce/commit/f24ae0ed5b9f2a618283525073bf1b54738255ad))

* Upgrade to @patternslib/dev 2.2.0 and adapt module federation config. ([40ec100](https://github.com/patternslib/pat-tinymce/commit/40ec100251a04d402ae01076f1f85b6a722757db))

## [3.0.0-alpha.0](https://github.com/patternslib/pat-tinymce/compare/2.1.0...3.0.0-alpha.0) (2022-06-15)


### Features


* **Build:** Build module federation enabled bundles. ([15ea018](https://github.com/patternslib/pat-tinymce/commit/15ea018482cf07c0d33a652bc0e34f7ae8fd2c0d))


### Breaking Changes


* Depend on @patternslib/dev and extend config from there. ([e74ff5e](https://github.com/patternslib/pat-tinymce/commit/e74ff5ed747ce3460411c11cc9a19cf1164d137e))

* Extend babel config from @patternslib/dev. ([7aaf68c](https://github.com/patternslib/pat-tinymce/commit/7aaf68cdbc63d5b0c6a05ee574a15c14abb4d852))

* Extend commitlint config from @patternslib/dev. ([0ec47fc](https://github.com/patternslib/pat-tinymce/commit/0ec47fc6aaad7223e881cf1d6b21e24fefde52fd))

* Extend eslint config from @patternslib/dev. ([1f981e1](https://github.com/patternslib/pat-tinymce/commit/1f981e1993e5aa92ac36d94f6a204e767856edf4))

* Extend jest config from @patternslib/dev. ([397a2f2](https://github.com/patternslib/pat-tinymce/commit/397a2f2f153cb3bc7890885e76472de9cf4156d8))

* Extend Makefile from @patternslib/dev. ([3779ef4](https://github.com/patternslib/pat-tinymce/commit/3779ef4d56503adb075b98a3c34116eee1f5412b))

* Extend prettier config from @patternslib/dev. ([dacc186](https://github.com/patternslib/pat-tinymce/commit/dacc1869d6e2b95f5102bf485363497030feb77c))

* Extend release-it config from @patternslib/dev. ([9a3b001](https://github.com/patternslib/pat-tinymce/commit/9a3b001ef6549e192ff8b0c106a48bad594b4114))

* Extend webpack config from @patternslib/dev. ([4337e7b](https://github.com/patternslib/pat-tinymce/commit/4337e7b03b8fca4103c42ca8baee94cd3f63af1c))


### Maintenance


* **build:** Add build:dev script to package.json to create a unminified development build. ([80d7518](https://github.com/patternslib/pat-tinymce/commit/80d75189a3d614682c946228c961c416505fb7b2))

* **Build:** @patternslib/patternslib as peerDependency. ([71d9418](https://github.com/patternslib/pat-tinymce/commit/71d9418bf4179f343ecc73be08b8c6c59c4abd41))Move @patternslib/patternslib dependency to peerDependencies and set to any version to avoid version conflicts when this package is a dependency of another Patternslib based package.

* **Build:** Add @patternslib/patternslib also to devDependencies so that we get it installed. ([4f4dab4](https://github.com/patternslib/pat-tinymce/commit/4f4dab4f88eb85e1fbdb4cc61378d5d38555fd1e))

* **Build:** Add keyword "patternslib" to package.json. ([07c1041](https://github.com/patternslib/pat-tinymce/commit/07c10416381a3f2269c41282c696928c1eacbc31))

* **Build:** Extend jest.config.js from Patternslib and reuse their setupTests file too. ([a6344ba](https://github.com/patternslib/pat-tinymce/commit/a6344ba4917d5b6de2502d1dd963275fe8134723))

* **Build:** Keep yarn.lock in repository. ([cdaa519](https://github.com/patternslib/pat-tinymce/commit/cdaa51921e70d0059a7448fca35d333eebd8fe67))

* **Build:** Makefile - Allow OTP when publishing to npm, build bundles and publish them on GitHub, add pre-release targets. ([367b84b](https://github.com/patternslib/pat-tinymce/commit/367b84bdd8c5b29563d921cb892faea4edea03f6))

* **Build:** Remove dependency regenerator-runtime except from test setup. The async/await runtime handling is already built-in in current Babel. ([fe8db45](https://github.com/patternslib/pat-tinymce/commit/fe8db45587c76d8a941317b074a7eb556085a4cd))

* **Build:** Update GitHub actions setup. ([b8344e5](https://github.com/patternslib/pat-tinymce/commit/b8344e5d459405fa5fc0ac0a0a00175db5202567))

* **Build:** Upgrade and cleanup dependencies. ([b87f279](https://github.com/patternslib/pat-tinymce/commit/b87f279b079dec0da7ed4ecae3c81cad73ff5513))

* **Build:** Upgrade tinymce to 5.10.5. ([d5faecc](https://github.com/patternslib/pat-tinymce/commit/d5faecc0cc6e03b5691bd044314a2b09506e4db3))

## [2.1.0](https://github.com/patternslib/pat-tinymce/compare/2.0.0...2.1.0) (2022-02-10)


### Features

* Use inline mode per default, which renders the editor not in an iframe but in a contenteditable div. The editor picks up all styles from the current page and ensures an better integration into the theme. ([5745bbf](https://github.com/patternslib/pat-tinymce/commit/5745bbfaf3b2120304be6310ddacdc1183113a97))



### Maintenance

* **Build:** Adapt to Patternslib 6.4.0 changes with single-named bundles. ([ae68168](https://github.com/patternslib/pat-tinymce/commit/ae68168b661a59fd8a7677742b6042ef5af9fa18))

* **Dependencies:** Uprade all dependencies. ([45d7fac](https://github.com/patternslib/pat-tinymce/commit/45d7fac65efc5db707fd6a4c933fcb05148f62cc))

* **webpack:** Configure devServer static directory. ([f2507b0](https://github.com/patternslib/pat-tinymce/commit/f2507b06ca4ccc4edd4c1a233712d5ecaf4e316f))

## [2.0.0](https://github.com/patternslib/pat-tinymce/compare/1.2.0...2.0.0) (2021-11-18)


### Breaking Changes

* Upgrade to Webpack 5. ([5b646cd](https://github.com/patternslib/pat-tinymce/commit/5b646cd70716378823efc41b61f884dabc572649))



### Maintenance

* **build:** Extend Patternslib release-it config file. ([3293760](https://github.com/patternslib/pat-tinymce/commit/32937608b5675726169d86c2e6e10fb52ee5daa3))

* **build:** Release on GitHub releases. ([b4c9ffc](https://github.com/patternslib/pat-tinymce/commit/b4c9ffc2bfc52490f8c4173eefb69d5cdc725643))

* **dependencies:** Upgrade TinyMCE to 5.10.2. ([8857efb](https://github.com/patternslib/pat-tinymce/commit/8857efb9cd3f5e3f20ce0259a0d9091d2a41f44d))

## [1.2.0](https://github.com/patternslib/pat-tinymce/compare/1.1.0...1.2.0) (2021-10-25)


### Features

* Upgrade up to minor versions. ([c9ef4e7](https://github.com/patternslib/pat-tinymce/commit/c9ef4e7026a871e2ef1f5a3e00cb421f29175577))


### Bug Fixes

* Remove unsupported plugins bbcode, fullpage and toc. ([8e14c6c](https://github.com/patternslib/pat-tinymce/commit/8e14c6c8c2c787f3d130d1cfa779994b340d963d))

## [1.1.0](https://github.com/patternslib/pat-tinymce/compare/1.0.0...1.1.0) (2021-06-15)


### Maintenance

* Test updates after jest upgrade. ([66cf35f](https://github.com/patternslib/pat-tinymce/commit/66cf35f16d04bf0bdd9256bbc204d34a43cd6122))
* **dependencies:** Depend on Patternslib v4.4.0. ([f5ea214](https://github.com/patternslib/pat-tinymce/commit/f5ea2145dc6e0e547e5a8d38567e2793b4532747))
* **dependencies:** Upgrade dependencies on minor+patch level. ([8b9f27c](https://github.com/patternslib/pat-tinymce/commit/8b9f27cf520bf8e499bc1d558f9d606a26c57f93))
* **dependencies:** Upgrade TinyMCE to 5.8.1. ([a2cf465](https://github.com/patternslib/pat-tinymce/commit/a2cf46588633ba16c82024e9d74cd54c759d486a))
* **make release-patch:** Add missing patch for patch level releases. ([3f9b8da](https://github.com/patternslib/pat-tinymce/commit/3f9b8dadfc1f517f51ea061dd75ff296df9e3c6d))
* **Release:** Remove the release-web target. Only Patternslib releases are pushed to Patterns-releases on Github. ([bc70d7a](https://github.com/patternslib/pat-tinymce/commit/bc70d7a7d67374c81196405553eee5f158674199))
* **Release process:** Do not include the release commit in the changelog. ([2b47cd3](https://github.com/patternslib/pat-tinymce/commit/2b47cd31fec6f8e6795a68b7a66e6ed30d438236))
* **webpack:** Adapt start script to recent dependency changes. ([df5f037](https://github.com/patternslib/pat-tinymce/commit/df5f037767bb25fdc10bcf94094591c826be9318))
* **webpack:** Simplify webpack. ([63149e3](https://github.com/patternslib/pat-tinymce/commit/63149e3f3a7c538ff63a8719192343b9b17fe889))

## 1.0.0 (2021-04-20)


### Maintenance

* Upgrade TinyMCE to 5.7.1. ([ad32354](https://github.com/patternslib/pat-tinymce/commit/ad32354a7513dd05587b7aef02c30ad578ec260c))
* Upgrade to Patternslib v4 final - tinymce customizations. ([49dddaf](https://github.com/patternslib/pat-tinymce/commit/49dddaf6f9e6c3533deee212945e6b65a813f877))
* Upgrade to Patternslib v4 final. ([070d8ea](https://github.com/patternslib/pat-tinymce/commit/070d8ea9eda7cc1fd8b65c9a37c5f5ffda6d6675))


## 1.0.0 - unreleased

- Initial release.