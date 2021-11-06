import { useState } from 'react';

export const useDeviceData = (deviceBrands, deviceModels, ticket) => {
  const [model, setModel] = useState(
    deviceModels.find((m) => m.model === ticket.model) ?? null
  );
  const [brand, setBrand] = useState(
    deviceBrands.find((b) => b.brand === ticket.marka) ?? null
  );
  const [type, setType] = useState(
    deviceBrands.find((t) => t.type === ticket.rodzaj) ?? null
  );

  const deviceTypeFilter = (types) => {
    if (model !== null && brand !== null) {
      types = types.filter((t) => t.type === model.type);
    } else if (model !== null) {
      types = types.filter((b) => b.type === model.type);
    } else if (brand !== null) {
      types = types.filter((t) => t.brand === brand.brand);
    }

    return types.filter(
      (device, index, self) =>
        self.findIndex((d) => d.type === device.type) === index
    );
  };

  const deviceBrandFilter = (brands) => {
    if (model !== null && type !== null) {
      brands = brands.filter(
        (b) => b.brand === model.brand && b.type === type.type
      );
    } else if (model !== null) {
      brands = brands.filter((b) => b.brand === model.brand);
    } else if (type !== null) {
      brands = brands.filter((b) => b.type === type.type);
    }

    return brands.filter(
      (device, index, self) =>
        self.findIndex((d) => d.brand === device.brand) === index
    );
  };
  const deviceModelFilter = (models) => {
    if (brand !== null && type !== null) {
      return models.filter(
        (m) => m.brand === brand.brand && m.type === type.type
      );
    } else if (brand !== null) {
      return models.filter((m) => m.brand === brand.brand);
    } else if (type !== null) {
      return models.filter((m) => m.type === type.type);
    } else return models;
  };

  return {
    model,
    setModel,
    brand,
    setBrand,
    type,
    setType,
    deviceTypeFilter,
    deviceBrandFilter,
    deviceModelFilter,
  };
};
