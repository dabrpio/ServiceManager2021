using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CommandApi.Controllers;
using CommandApi.Dtos;
using CommandApi.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;
using CommandApi.Models;
using AutoMapper;
using FluentAssertions;

namespace Catalog.UnitTests;

    public class DeviceControllerTests
    {
        private readonly Mock<IDevicesRepo> repositoryStub = new();
        private readonly Mock<ILogger<DevicesController>> loggerStub = new();
        private readonly Random rand = new();

        private static IMapper _mapper;
        
        public DeviceControllerTests()
        {
            if (_mapper == null)
            {
                var mappingConfig = new MapperConfiguration(mc =>
                {
                    mc.AddProfile(new CommandApi.Profiles.DevicesProfile());
                });
                IMapper mapper = mappingConfig.CreateMapper();
                _mapper = mapper;
            }
        }

        [Fact]
        public async Task GetDeviceById_WithUnexistingItem_ReturnsNotFound()
        {
            // Arrange
            repositoryStub.Setup(repo => repo.GetDeviceById(It.IsAny<int>())).Returns((Device)null);

            var controller = new DevicesController(repositoryStub.Object, _mapper);

            // Act
            var result =  controller.GetDeviceById(It.IsAny<int>());

            // Assert
            result.Result.Should().BeOfType<NotFoundResult>();



        }

       


        }

        
    





