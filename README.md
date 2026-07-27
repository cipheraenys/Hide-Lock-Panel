# Hide Panel on Lock Screen

A GNOME Shell extension that hides the GNOME top bar when the session is locked.

---

## Compatibility

| GNOME Shell | Status |
|---|---|
| 45 | ✅ Supported |
| 46 | ✅ Supported |
| 47 | ✅ Supported |
| 48 | ✅ Supported |
| 49 | ✅ Supported |
| 50 | ✅ Supported |

---

## Installation

### extensions.gnome.org (recommended)

Search for **Hide Panel on Lock Screen** on [extensions.gnome.org](https://extensions.gnome.org), or install it from [Extension Manager](https://github.com/mjakeman/extension-manager). GNOME keeps the extension up to date automatically.

### Manual

```bash
# Clone the repository
git clone https://github.com/cipheraenys/Hide-Lock-Panel

# Move it to the extensions directory
mv Hide-Lock-Panel ~/.local/share/gnome-shell/extensions/Hide-Lock-Panel@Ciferatorium
```

Then log out and log back in (required on Wayland), and enable the extension:

```bash
gnome-extensions enable Hide-Lock-Panel@Ciferatorium
```

---

## Contributing

Issues and pull requests are welcome. If you're on a GNOME version not listed above and it works (or doesn't), feel free to open an issue and let me know.

---

## License

This project is licensed under the [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0). See [LICENSE](LICENSE) for details.