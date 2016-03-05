//
//  RCTVisualView.m
//  VisualEffectView
//
//  Created by happy on 16/3/4.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "RCTVisualView.h"

@implementation RCTVisualView{
  UIVisualEffectView *_RCTVisualView;
}

- (void)setVisualType:(NSString *)visualType
{
  if (_RCTVisualView) {
    [_RCTVisualView removeFromSuperview];
  }
  
  UIBlurEffect *blurEffect;
  
  if ([visualType isEqual: @"extraLight"]) {
    blurEffect = [UIBlurEffect effectWithStyle:UIBlurEffectStyleExtraLight];
  } else if ([visualType isEqual: @"light"]) {
    blurEffect = [UIBlurEffect effectWithStyle:UIBlurEffectStyleLight];
  } else if ([visualType isEqual: @"dark"]) {
    blurEffect = [UIBlurEffect effectWithStyle:UIBlurEffectStyleDark];
  } else {
    blurEffect = [UIBlurEffect effectWithStyle:UIBlurEffectStyleDark];
  }
  
  _RCTVisualView = [[UIVisualEffectView alloc] initWithEffect:blurEffect];
}

-(void)layoutSubviews
{
  [super layoutSubviews];
  
  _RCTVisualView.frame = self.bounds;
  [self insertSubview:_RCTVisualView atIndex:0];
}
@end
