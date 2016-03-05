//
//  RCTVisualViewManager.m
//  VisualEffectView
//
//  Created by happy on 16/3/4.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "RCTVisualViewManager.h"
#import "RCTVisualView.h"
@implementation RCTVisualViewManager


RCT_EXPORT_MODULE();

- (UIView *)view
{
  return [[RCTVisualView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(visualType, NSString);

@end
