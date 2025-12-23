def simclr_augment(image):
    # 组合多种强增强策略
    img = random_resized_crop(img) # 随机裁剪
    if random.random() < 0.5:
        img = img.transpose(Image.FLIP_LEFT_RIGHT) # 水平翻转
    if random.random() < 0.8:
        # 颜色抖动：亮度、对比度、饱和度
        img = ImageEnhance.Brightness(img).enhance(random.uniform(0.6, 1.4))
    return normalize(np.array(img))
