import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutIncidentLocationsInput } from "../inputs/RenamedcaseCreateOrConnectWithoutIncidentLocationsInput";
import { RenamedcaseCreateWithoutIncidentLocationsInput } from "../inputs/RenamedcaseCreateWithoutIncidentLocationsInput";
import { RenamedcaseUpdateWithoutIncidentLocationsInput } from "../inputs/RenamedcaseUpdateWithoutIncidentLocationsInput";
import { RenamedcaseUpsertWithoutIncidentLocationsInput } from "../inputs/RenamedcaseUpsertWithoutIncidentLocationsInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpdateOneWithoutIncidentLocationsInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutIncidentLocationsInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutIncidentLocationsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutIncidentLocationsInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutIncidentLocationsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpsertWithoutIncidentLocationsInput, {
    nullable: true
  })
  upsert?: RenamedcaseUpsertWithoutIncidentLocationsInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutIncidentLocationsInput, {
    nullable: true
  })
  update?: RenamedcaseUpdateWithoutIncidentLocationsInput | undefined;
}
