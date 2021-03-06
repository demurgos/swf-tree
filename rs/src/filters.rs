#[cfg(feature = "serde")]
use ::serde::{Deserialize, Serialize};

use crate::basic_types::StraightSRgba8;
use crate::fixed::{Sfixed16P16, Sfixed8P8};
use crate::float_is::Is;
use crate::gradient::ColorStop;

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Blur {
  pub blur_x: Sfixed16P16,
  pub blur_y: Sfixed16P16,
  pub passes: u8,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Bevel {
  pub shadow_color: StraightSRgba8,
  pub highlight_color: StraightSRgba8,
  pub blur_x: Sfixed16P16,
  pub blur_y: Sfixed16P16,
  pub angle: Sfixed16P16,
  pub distance: Sfixed16P16,
  pub strength: Sfixed8P8,
  pub inner: bool,
  pub knockout: bool,
  pub composite_source: bool,
  pub on_top: bool,
  pub passes: u8,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug)]
pub struct ColorMatrix {
  pub matrix: [f32; 20],
}

impl ::std::cmp::PartialEq for ColorMatrix {
  fn eq(&self, other: &Self) -> bool {
    self.matrix.is(&other.matrix)
  }
}

impl ::std::cmp::Eq for ColorMatrix {}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug)]
pub struct Convolution {
  pub matrix_width: usize,
  pub matrix_height: usize,
  pub divisor: f32,
  pub bias: f32,
  pub matrix: Vec<f32>,
  pub default_color: StraightSRgba8,
  pub clamp: bool,
  pub preserve_alpha: bool,
}

impl ::std::cmp::PartialEq for Convolution {
  fn eq(&self, other: &Self) -> bool {
    self.matrix_width == other.matrix_width
      && self.matrix_height == other.matrix_height
      && self.divisor.is(&other.divisor)
      && self.bias.is(&other.bias)
      && self.matrix.is(&other.matrix)
      && self.default_color == other.default_color
      && self.clamp == other.clamp
      && self.preserve_alpha == other.preserve_alpha
  }
}

impl ::std::cmp::Eq for Convolution {}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DropShadow {
  pub color: StraightSRgba8,
  pub blur_x: Sfixed16P16,
  pub blur_y: Sfixed16P16,
  pub angle: Sfixed16P16,
  pub distance: Sfixed16P16,
  pub strength: Sfixed8P8,
  pub inner: bool,
  pub knockout: bool,
  pub composite_source: bool,
  pub passes: u8,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Glow {
  pub color: StraightSRgba8,
  pub blur_x: Sfixed16P16,
  pub blur_y: Sfixed16P16,
  pub strength: Sfixed8P8,
  pub inner: bool,
  pub knockout: bool,
  pub composite_source: bool,
  pub passes: u8,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct GradientBevel {
  pub gradient: Vec<ColorStop>,
  pub blur_x: Sfixed16P16,
  pub blur_y: Sfixed16P16,
  pub angle: Sfixed16P16,
  pub distance: Sfixed16P16,
  pub strength: Sfixed8P8,
  pub inner: bool,
  pub knockout: bool,
  pub composite_source: bool,
  pub on_top: bool,
  pub passes: u8,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct GradientGlow {
  pub gradient: Vec<ColorStop>,
  pub blur_x: Sfixed16P16,
  pub blur_y: Sfixed16P16,
  pub angle: Sfixed16P16,
  pub distance: Sfixed16P16,
  pub strength: Sfixed8P8,
  pub inner: bool,
  pub knockout: bool,
  pub composite_source: bool,
  pub on_top: bool,
  pub passes: u8,
}
